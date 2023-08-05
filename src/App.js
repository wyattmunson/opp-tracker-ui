import logo from "./logo.svg";
import "./App.css";
import tripData from "./tripData.json";
import { LocationBlock, StatCard } from "./components";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { StoreProvider, useStoreState } from "easy-peasy";
import store from "./store";
import Header from "./components/header/Header";
import OppsContainer from "./components/opps/OppsContainer";
import OppsDesign from "./components/staticPages/OppsDesign1";
import MyActionitems from "./components/opps/myActionItems/MyActionItems";
import AlertPopup from "./components/lynx/alert/AlertPopup";

const Home = () => {
  return (
    <div>
      <h1>Opp Tracker</h1>
      <div className="row">
        <Card title="Opps" icon="fas fa-paper-plane" body="View all opps" link="/opps" />
      </div>
    </div>
  );
};

const Card = (props) => {
  if (props.link) {
    return (
      <Link to={props.link} className="autoWidth">
        <StandardCard {...props} />
      </Link>
    );
  }

  return <StandardCard {...props} />;
};

const StandardCard = ({ title, body, icon }) => {
  return (
    <>
      <div className="card lynxCard">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h4>{icon && <i className={icon} />}</h4>
          <p className="card-text">{body}</p>
        </div>
      </div>
    </>
  );
};

const Samp = () => {
  return (
    <>
      <h1>SAMPLE</h1>
      <h1>SAMPLE</h1>
      <h1>SAMPLE</h1>
    </>
  );
};

function App() {
  return (
    <StoreProvider store={store}>
      <AlertPopup />
      <BrowserRouter>
        <Header />
        <div className="App container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design/opps1" element={<OppsDesign />} />
            <Route path="/opps/*" element={<OppsContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
