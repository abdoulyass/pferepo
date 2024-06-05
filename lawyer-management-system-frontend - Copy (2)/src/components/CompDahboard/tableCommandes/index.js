import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MUIDataTable from "mui-datatables";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CircularProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';

export default function TableComm() {
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [action, setAction] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [avocatId, setAvocatId] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading spinner

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('userToken');
        if (!token) {
          throw new Error('Token not found');
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        };

        const response = await axios.get('http://127.0.0.1:8000/api/user', config);
        setAvocatId(response.data.id);
        console.log(response.data);
        const problemsResponse = await axios.get('http://127.0.0.1:8000/api/avocatproblemes', config);
        console.log(problemsResponse.data);
        
        // Transform the data to include full name
        const transformedData = problemsResponse.data.problemes.map(probleme => ({
          ...probleme,
          fullName: `${probleme.user.prenom} ${probleme.user.nom}`,
        }));

        setOrders(transformedData);
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
        if (error.response && error.response.status === 401) {
          console.error('Unauthorized access - Token might be invalid or expired.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleClickOpen = (order, action) => {
    setCurrentOrder(order);
    setAction(action);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
  };

  const handleConfirm = () => {
    if (action === "accept") {
      acceptOrder(currentOrder.id);
    } else if (action === "reject") {
      rejectOrder(currentOrder.id);
    }
    setOpen(false);
  };

  const acceptOrder = (orderId) => {
    axios.post('http://127.0.0.1:8000/api/accepter', { probleme_id: orderId }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      }
    })
    .then(response => {
      const updatedOrders = orders.map(order => {
        if (order.id === orderId) {
          return { ...order, status: 'Acceptée' };
        }
        return order;
      });
      setOrders(updatedOrders);
      setConfirmationMessage(`Commande acceptée avec succès.`);
      setConfirmOpen(true);
    })
    .catch(error => {
      console.error('Une erreur s\'est produite lors de l\'acceptation de la commande :', error);
    });
  };

  const rejectOrder = (orderId) => {
    axios.post('http://127.0.0.1:8000/api/refuser', { probleme_id: orderId }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      }
    })
    .then(response => {
      const updatedOrders = orders.filter(order => order.id !== orderId);
      setOrders(updatedOrders);
      setConfirmationMessage(`Commande rejetée avec succès.`);
      setConfirmOpen(true);
    })
    .catch(error => {
      console.error('Une erreur s\'est produite lors du rejet de la commande :', error);
    });
  };

  const columns = [
    {
      name: "fullName",
      label: "Nom de l'utilisateur",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "description",
      label: "Description",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "status",
      label: "État",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value) => {
          const style = makeStyle(value);
          return <span style={style}>{value}</span>;
        },
      },
    },
    {
      name: "document",
      label: "Document",
      options: {
        customBodyRender: (value) => (
          <a href={value} target="_blank" rel="noopener noreferrer">
            Télécharger
          </a>
        ),
      },
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta) => (
          <div>
            <button
              className="btn btn-primaryCom btn-sm mr-2"
              onClick={() => handleClickOpen(orders[tableMeta.rowIndex], "accept")}
            >
              Accepter
            </button>{" "}
            <button
              className="btn btn-secondary btn-sm mr-2"
              onClick={() => handleClickOpen(orders[tableMeta.rowIndex], "reject")}
            >
              Rejeter
            </button>{" "}
          </div>
        ),
      },
    },
  ];

  const makeStyle = (status) => {
    if (status === "Acceptée") {
      return {
        background: "rgba(145, 254, 159, 0.47)",
        color: "green",
      };
    } else if (status === "Rejetée") {
      return {
        background: "#ffadad8f",
        color: "red",
      };
    } else {
      return {
        background: "#D8942F",
        color: "#fff",
      };
    }
  };

  const options = {
    filterType: 'checkbox',
    responsive: 'standard',
    selectableRows: 'none',
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20],
    pagination: true,
    search: true,
    print: false,
    download: false,
    viewColumns: false,
    filter: false,
    textLabels: {
      body: {
        noMatch: "Désolé, aucun enregistrement correspondant trouvé",
      },
    },
  };

  const getMuiTheme = () =>
    createTheme({
      overrides: {
        MUIDataTable: {
          root: {
            width: "100%",
          },
        },
      },
    });

  return (
    <div className="container mt-4 cmdcontainer">
      {loading ? (
        <div className="spinner-containerc">
          <CircularProgress size={50} />
        </div>
      ) : (
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"Commandes"}
            data={orders}
            columns={columns}
            options={options}
          />
        </ThemeProvider>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Êtes-vous sûr de vouloir {action === "accept" ? "accepter" : "rejeter"} cette commande?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={confirmOpen}
        onClose={handleConfirmClose}
        aria-labelledby="confirmation-dialog-title"
        aria-describedby="confirmation-dialog-description"
      >
        <DialogTitle id="confirmation-dialog-title">
          {"Opération terminée"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirmation-dialog-description">
            {confirmationMessage}
            {confirmationMessage.includes("acceptée") ? (
              <CheckCircleIcon style={{ color: "green", marginLeft: "10px", fontSize: "1.5rem" }} />
            ) : (
              <CancelIcon style={{ color: "red", marginLeft: "10px", fontSize: "1.5rem" }} />
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmClose} color="primary" autoFocus>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
