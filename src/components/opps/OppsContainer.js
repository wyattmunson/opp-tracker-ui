import { useStoreActions, useStoreState } from "easy-peasy";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CreateActionItem from "./createActionItem/CreateActionItem";
import CreateCall from "./createCall/CreateCall";
import CreateOpp from "./createOpp/CreateOpp";
import EditOpp from "./oppDetail/editOpp/EditOpp";
import OppDetail from "./oppDetail/OppDetail";
import OppsTable from "./oppsTable/OppsTable";
import BreadCrumbs from "./components/BreadCrumbs";
import CreatePerson from "./createPerson/CreatePerson";
import AllCalls from "./oppDetail/calls/allCalls/AllCalls";
import CreateMeddpic from "./oppDetail/meddpic/createMeddpic/CreateMeddpic";
import MyActionitems from "./myActionItems/MyActionItems";
import Switchboard from "./switchboard/Switchboard";
import AllPeople from "./allPeople/AllPeople";
import Accounts from "./accounts/Accounts";

const OppsContainer = () => {
  const { opps } = useStoreState((state) => state);
  const { setOpps } = useStoreActions((actions) => actions);

  useEffect(() => {
    fetch("http://localhost:1515/opps")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setOpps(res);
      })
      .catch((err) => {
        console.error("FAILED TO GET OPPS", err);
      });
  }, []);

  if (!opps) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="oppsContainer container">
      {/* <h2>Opps</h2>
      <BreadCrumbs /> */}
      {/* <Link to="/opps">Opps</Link> */}
      <Routes>
        <Route exact path="/" element={<Switchboard />} />
        <Route exact path="/table" element={<OppsTable />} />
        <Route exact path="/:id" element={<OppDetail />} />
        <Route exact path="/createcall" element={<CreateCall />} />
        <Route exact path="/:id/calls/:id" element={<CreateCall />} />
        <Route exact path="/:id/calls/all" element={<AllCalls />} />
        <Route exact path="/:id/people/:id" element={<CreatePerson />} />
        <Route exact path="/createactionitem" element={<CreateActionItem />} />
        <Route exact path="/createperson" element={<CreatePerson />} />
        <Route exact path="/:id/meddpic/create" element={<CreateMeddpic />} />
        <Route exact path="/actionitems/mine" element={<MyActionitems />} />
        <Route exact path="/people" element={<AllPeople />} />
        <Route exact path="/people/edit/:id" element={<CreatePerson />} />
        <Route exact path="/accounts" element={<Accounts />} />
        <Route
          exact
          path="/:id/actionitems/:id"
          element={<CreateActionItem />}
        />
        <Route exact path="/:id/edit" element={<EditOpp />} />
        <Route exact path="/create" element={<CreateOpp />} />
      </Routes>
    </div>
  );
};

export default OppsContainer;
