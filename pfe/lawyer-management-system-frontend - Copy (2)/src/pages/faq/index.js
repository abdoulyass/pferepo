import { Box, TextField, Typography, CircularProgress } from "@mui/material";
import Header from "../../components/backof/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Sidebar from "../../pages/global/Sidebar";
import Topbar from "../../pages/global/Topbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import { ColorModeContext, useMode } from "../../theme";
import { tokens } from "../../theme";
import axios from "axios";

const FAQ = () => {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [searchTerm, setSearchTerm] = useState('');
  const [faqItems, setFaqItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqItems = async () => {
      try {
        
        const response = await axios.get('http://127.0.0.1:8000/api/allavis');
        setFaqItems(response.data.data);
        setLoading(false); // Met à jour l'état loading une fois les données récupérées
      } catch (error) {
        console.error('Error fetching FAQ items:', error);
        setLoading(false); // Met à jour l'état loading en cas d'erreur
      }
    };

    fetchFaqItems();
  }, []);

  const searchTermWithoutSpaces = searchTerm.replace(/\s/g, '');

  const filteredFaqItems = faqItems.filter(item => 
    item.message.replace(/\s/g, '').toLowerCase().includes(searchTermWithoutSpaces.toLowerCase()) ||
    item.user.prenom.replace(/\s/g, '').toLowerCase().includes(searchTermWithoutSpaces.toLowerCase()) ||
    item.user.nom.replace(/\s/g, '').toLowerCase().includes(searchTermWithoutSpaces.toLowerCase())
  );

  return (
    <div className="d-flex">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Sidebar />
          <main style={{ width: '100%' }}>
            <Topbar />
            <Box m="20px">
              <Header title="avis" subtitle="Frequently Asked Questions Page" />
              <TextField
                label="Rechercher"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {loading ? ( // Affiche le spinner pendant le chargement des données
                <Box display="flex" justifyContent="center" alignItems="center" height="200px">
                  <CircularProgress />
                </Box>
              ) : filteredFaqItems.length === 0 ? (
                <Typography variant="h6" color="error" align="center" mt={2}>
                  Aucune question trouvée correspondant à votre recherche.
                </Typography>
              ) : (
                filteredFaqItems.map((item, index) => (
                  <Accordion key={index} defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography color={colors.greenAccent[500]} variant="h5">
                        {`${item.user.prenom} ${item.user.nom}`}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {item.message}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))
              )}
            </Box>  
          </main>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
};

export default FAQ;
