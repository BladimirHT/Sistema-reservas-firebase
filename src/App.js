import "./App.css";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";
import { useEffect, useState } from "react";
import { ProfileImage } from "./components/ProfileImage";
import { useUser } from "./providers/UserProvider";
import { MainMenu } from "./components/MainMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import logo from "./img/logo.png";
import restaurante_2 from "./img/restautante_2.jpg";
import restaurante_3 from "./img/restautante_3.jpg";
import { Home } from "./components/Home";
import Listado from "../src/components/Listado";
import MisReservas from "./components/MisReservas"

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser } = useUser();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((userCredentials) => {
        setUser({
          name: userCredentials.user.displayName,
          profileImage: userCredentials.user.photoURL,
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  useEffect(() => {
    console.log(`Welcome user ${user.name}`);
  }, [user]);

  useEffect(() => {
    auth.onAuthStateChanged(() => {
      const user = auth.currentUser;

      if (user) {
        setUser({
          name: user.displayName,
          profileImage: user.photoURL,
        });
      }
    });
  }, []);
  const objeto = {
    source: { restaurante_2 },
    titulo: "Restaurante Gabriel",
  };


  // console.log(objeto.source, objeto.titulo);

  // const srcdos = {restaurante_3};
  // const titulodos = 'Restaurante Christopher';

  return (
    <Router>
      <main>
        <header className="container-main-header">
          <img
            className="logo"
            src={logo}
            alt="Icutter Store"
            heigth="100px"
            width="100px"
          />
          <MainMenu />
          <ProfileImage />
        </header>
        <Switch className="container-main">
          <Route path="/" exact>
            {user.name ? <Redirect to="/signUp" /> : <Redirect to="/" />}
            <section className="container">
              <div className="card-container-sign-in-card">
                <button onClick={handleGoogleSignIn} className="sign-in-button">
                  Sign in with Google
                </button>
                {errorMessage && <div className="error">{errorMessage}</div>}
              </div>
            </section>
          </Route>

          <Route path="/Home">
            <Home/>
            <Home/>
            <Home/>
            <Home/>
            <Home/>
            <Home/>
          </Route>
          <Route path="/misReservas">
            <Listado />
            <Home/>
            <Home/>
          </Route>
          <ProtectedRoute path="/signUp">
            <section >
              <div>Login: {user?.name} </div>
            </section>
            <Listado />
          </ProtectedRoute>
        </Switch>
      </main>
    </Router>
  );
}
export default App;
