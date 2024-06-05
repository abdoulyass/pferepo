import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { CustomRoute } from "../components";
import Topbar from "../pages/global/Topbar";
import Sidebar from "../pages/global/Sidebar";
import Dashboard from "../pages/dashboard";
import Team from "../pages/team";
import Invoices from "../pages/invoices";
import Contacts from "../pages/contacts";
import Bar from "../pages/bar";
import Form from "../pages/form";
import Line from "../pages/line";
import Pie from "../pages/pie";
import FAQ from "../pages/faq";
import Geography from "../pages/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import Calendar from "../pages/calendar/calendar";
import { 
    Login,
    MainPage,
    SignupForm,
    Dash,
    Messages,
    Orders,
    Clients, 
    Documents,
    Revenue,
    Request,
    Suivi,
    CaseCreate,
    Notification,
    Problems,
    profil,
    Preinscription,
    Notifications,
    CaseDetails
   
} from "../pages";
import  Nonconfirmed from "../components/nonconfirmed"

const MainNavigator = () => {
    return (
        <Router>
              <Routes>
                <Route
                
                    path="/login"
                    element={<CustomRoute path="/login" showfooter component={Login} />}
                />
                <Route
                    path="/profil"
                    element={<CustomRoute path="/login" showfooter showheaderLog component={profil} />}
                />
                  <Route
                    path="preinscription"
                    element={<CustomRoute path="/preinscription" showfooter showheaderLog component={Preinscription} />}
                />
                 <Route
                    path="/Nonconfirmed"
                    element={<CustomRoute path="/Nonconfirmed" showfooter showheaderLog component={Nonconfirmed} />}
                />
                  <Route
                    path="Problemes"
                    element={<CustomRoute path="/Problemes" showfooter showheaderLog component={Problems} />}
                />
                <Route
                    path="/inscription"
                    element={<CustomRoute path="/inscription"  showfooter component={SignupForm} />}
                />
                <Route
                    path="/dashboard"
                    element={<CustomRoute path="/dashboard"  showfooter showheaderLog component={Dash} />}
                />
                 <Route
                    path="dashboard/Notifications"
                    element={<CustomRoute   path="/dashboard"  component={Notifications} />}
                />
                <Route
                    path="commandes"
                    element={<CustomRoute path="/commandes" showheaderLog  showfooter component={Orders} />}
                />
                <Route
                    path="clients"
                    element={<CustomRoute path="/clients" showheaderLog  showfooter component={Clients} />}
                />
                <Route
                    path="/documents"
                    element={<CustomRoute path="/documents" showheaderLog  showfooter component={Documents} />}
                />
                <Route
                    path="/revenue"
                    element={<CustomRoute path="/revenue" showheaderLog  showfooter component={Revenue} />}
                />
                <Route
                    path="request"
                    element={<CustomRoute path="/request" showheaderLog showfooter component={Request} />}
                />
                <Route
                    path="create-case"
                    element={<CustomRoute path="/create-case" showheaderLog showfooter component={CaseCreate} />}
                />
                <Route
                    path="suivi-case"
                    element={<CustomRoute path="/suivi-case" showheaderLog  showfooter component={Suivi} />}
                />
               <Route
                    path="/suivi-case/:id"
                    element={<CustomRoute path="/suivi-case/:id" showheaderClient  showfooter component={CaseDetails } />}
                />
                <Route
                    path="avocat/notifications"
                    element={<CustomRoute path="/notifications" showheaderClient  showfooter component={Notification} />}
                />
                <Route path="/" element={<CustomRoute path="/" showheader showfooter  component={MainPage} />} />
                <Route path="/backofficePanel/team" element={<Team />} />
                <Route path="/backofficePanel" element={<Dashboard />} />
                <Route path="backofficePanel/contacts" element={<Contacts />} />
                <Route path="backofficePanel/invoices" element={<Invoices />} />
                <Route path="backofficePanel/form" element={<Form />} />
                <Route path="backofficePanel/bar" element={<Bar />} />
                <Route path="backofficePanel/pie" element={<Pie />} />
                <Route path="backofficePanel/line" element={<Line />} />
                <Route path="backofficePanel/faq" element={<FAQ />} />
              
                <Route path="backofficePanel/geography" element={<Geography />} />
                </Routes>
        </Router>
    );
}

export default MainNavigator;
