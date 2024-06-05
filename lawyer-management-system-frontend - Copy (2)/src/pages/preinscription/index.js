import React, { useState, useEffect } from 'react';
import { Box, Button, Modal, TextField, Typography, CircularProgress } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import tster from "../../imgs/tst.png";
import tste from "../../imgs/tst2.png";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from 'axios';

const Preinscription = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userWithNationalID, setUserWithNationalID] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const bearerToken = localStorage.getItem('userToken');
        const response = await axios.get('http://127.0.0.1:8000/api/user', {
          headers: {
            'Authorization': `Bearer ${bearerToken}`
          }
        });

        const userData = response.data;

        if (userData.numero_carte_nationale && userData.etat == 0) {
          setUserWithNationalID(true);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (userWithNationalID) {
      setTimeout(() => {
        navigate('/profil'); 
      }, 3000);
    }
  }, [userWithNationalID, navigate]);

  const handleFormSubmit = async (values, { resetForm }) => {
    setLoading(true);

    const formData = new FormData();
    formData.append('contact', values.contact);
    formData.append('address1', values.address1);
    formData.append('sector', values.sector);
    formData.append('nationalID', values.nationalID);
    formData.append('professionalEmail', values.professionalEmail);
    if (values.certificat) {
      formData.append('certificat', values.certificat);
    }

    try {
      const bearerToken = localStorage.getItem('userToken');
      await axios.post('http://127.0.0.1:8000/api/preinscription', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${bearerToken}`
        },
        withCredentials: true,
      });

      setSuccessModalOpen(true);
      resetForm();

      setTimeout(() => {
        navigate('/profil'); 
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="d-flex card" style={{ height: "100vh" }}>
      <img src={tster} className='backGround' />
      <img src={tste} className='backGround2' />
      <main className='updateinfocont'>
        <Box m="20px">
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
              setFieldValue
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
                    label="Numéro de téléphone"
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
                    label="Adresse"
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
                    label="Secteur d'activité"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.sector}
                    name="sector"
                    error={!!touched.sector && !!errors.sector}
                    helperText={touched.sector && errors.sector}
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
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email professionnel"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.professionalEmail}
                    name="professionalEmail"
                    error={!!touched.professionalEmail && !!errors.professionalEmail}
                    helperText={touched.professionalEmail && errors.professionalEmail}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <Box sx={{ gridColumn: "span 4" }}>
                    <input
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                      id="certificat"
                      name="certificat"
                      type="file"
                      style={{ display: 'none' }}
                      onChange={(event) => {
                        setFieldValue("certificat", event.currentTarget.files[0]);
                      }}
                    />
                    <label htmlFor="certificat">
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Certificat (facultatif)"
                        value={values.certificat ? values.certificat.name : ''}
                        InputProps={{
                          readOnly: true,
                        }}
                        onClick={() => document.getElementById('certificat').click()}
                        error={!!touched.certificat && !!errors.certificat}
                        helperText={touched.certificat && errors.certificat}
                      />
                    </label>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" className='btn btn-primary' style={{ background: "#d9942f" }} variant="contained">
                    Continuer
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </main>
      
      {/* Success Modal */}
      <Modal
        open={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        aria-labelledby="success-modal-title"
        aria-describedby="success-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            p: 4,
            width: 400,
            textAlign: 'center'
          }}
        >
          <Typography variant="h6" component="h2">
            La partie préinscription est effectuée avec succès
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Veuillez attendre la confirmation de Lawyer Service pour être membre dans Lawyer Service.
          </Typography>
        </Box>
      </Modal>
      
      {/* User with National ID Modal */}
      <Modal
        open={userWithNationalID}
        onClose={() => setUserWithNationalID(false)}
        aria-labelledby="user-with-national-id-modal-title"
        aria-describedby="user-with-national-id-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            p: 4,
            width: 400,
            textAlign: 'center'
          }}
        >
          <Typography variant="h6" component="h2">
            Vous êtes déjà inscrit
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Vous avez déjà fourni votre numéro de carte nationale. Vous serez redirigé vers votre profil.
          </Typography>
        </Box>
      </Modal>

      {loading && (
        <Modal
          open={true}
          aria-labelledby="loading-modal-title"
          aria-describedby="loading-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'transparent',
              width: 200,
              textAlign: 'center'
            }}
          >
            <CircularProgress />
            <Typography sx={{ mt: 2 }}>
              ...
            </Typography>
          </Box>
        </Modal>
      )}
    </div>
  );
};

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  contact: yup
    .string()
    .matches(phoneRegExp, "Numéro de téléphone non valide")
    .required("Requis"),
  address1: yup.string().required("Requis"),
  sector: yup.string().required("Requis"),
  nationalID: yup.string().required("Requis"),
  professionalEmail: yup.string().email("Email non valide").required("Requis"),
  certificat: yup.mixed().notRequired()
});

const initialValues = {
  contact: "",
  address1: "",
  sector: "",
  nationalID: "",
  professionalEmail: "",
  certificat: null
};

export default Preinscription;
