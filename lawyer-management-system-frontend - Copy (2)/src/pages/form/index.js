import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { tokens } from "../../theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/backof/Header";
import Sidebar from "../../pages/global/Sidebar";
import Topbar from "../../pages/global/Topbar";
import { Modal, Typography } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import { useState } from "react";
import { CheckCircleOutline } from "@mui/icons-material";
import axios from "axios";

const FormulaireUtilisateur = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSidebar, setIsSidebar] = useState(true);
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const handleFormSubmit = async (values) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/addNewavocat ", values);
      console.log(response.data); 
      setSuccessMessage("Utilisateur créé avec succès!");
      setOpenModal(true);
    } catch (error) {
      if (error.response) {
        console.error("Erreur de réponse de l'API:", error.response.data);
        setFormErrors(error.response.data.errors);
      } else if (error.request) {
        console.error("Pas de réponse de l'API:", error.request);
      } else {
        console.error("Erreur lors de la configuration de la requête:", error.message);
      }
    }
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setSuccessMessage("");
  };

  return (
    <div className="d-flex" style={{height:"100vh"}}>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Sidebar />
        <main style={{ width: '100%' }}>
          <Topbar />
              <Box m="20px">
    <Header title="recruter un avocat" subtitle="Créer un nouveau profil utilisateur" />

    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={checkoutSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Prénom"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={!!touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Nom de famille"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={!!touched.lastName && !!errors.lastName}
              helperText={touched.lastName && errors.lastName}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Numéro de contact"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.contact}
              name="contact"
              error={!!touched.contact && !!errors.contact}
              helperText={touched.contact && errors.contact}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Adresse 1"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address1}
              name="address1"
              error={!!touched.address1 && !!errors.address1}
              helperText={touched.address1 && errors.address1}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Adresse 2"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address2}
              name="address2"
              error={!!touched.address2 && !!errors.address2}
              helperText={touched.address2 && errors.address2}
              sx={{ gridColumn: "span 4" }}
            />
             <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Numéro de la carte nationale"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.nationalID}
                    name="nationalID"
                    error={!!touched.nationalID && !!errors.nationalID}
                    helperText={touched.nationalID && errors.nationalID}
                    sx={{ gridColumn: "span 4" }}
                  />
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Créer un nouvel utilisateur
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  </Box>
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
    <Modal open={openModal} onClose={handleCloseModal}>
  <Box
    sx={{
      position: 'absolute',
      width: 400,
      bgcolor: 'black', // Changer la couleur de fond en noir
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <CheckCircleOutline sx={{ color: 'green', mr: 1 }} />
      <Typography variant="h6" sx={{ color: 'white' }}>{successMessage}</Typography>
    </Box>
    <Button onClick={handleCloseModal}>Fermer</Button>
  </Box>
</Modal>

  </div>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("Champ requis"),
  lastName: yup.string().required("Champ requis"),
  email: yup.string().email("Email invalide").required("Champ requis"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Numéro de téléphone non valide")
    .required("Champ requis"),
  address1: yup.string().required("Champ requis"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",

};

export default FormulaireUtilisateur;
