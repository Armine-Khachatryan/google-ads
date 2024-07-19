import React from "react";
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  GOOGLE_FORM,
  GOOGLE_FORM_ACCOUNT,
  GOOGLE_FORM_ANALYZING,
  GOOGLE_FORM_BUSINESS,
  GOOGLE_FORM_DETAILS,
  LOGIN,
  OVERALL_RESULTS,
} from "./router-path";
import {
  Analyzing,
  FormAccount,
  GoogleForm,
  Login,
  FormDetails,
  FormBusiness,
  OverallResults,
} from "../pages/index";
import { AccountLayout } from "../layout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AccountLayout />} path={LOGIN}>
        <Route index element={<Login />} />
        <Route
          path={GOOGLE_FORM}
          element={<Navigate to={GOOGLE_FORM + "account"} replace />}
        />
        <Route element={<GoogleForm />}>
          <Route path={GOOGLE_FORM_ACCOUNT} index element={<FormAccount />} />
          <Route path={GOOGLE_FORM_DETAILS} element={<FormDetails />} />
          <Route path={GOOGLE_FORM_BUSINESS} element={<FormBusiness />} />
        </Route>
        <Route path={GOOGLE_FORM_ANALYZING} element={<Analyzing />} />
      </Route>
      <Route path={OVERALL_RESULTS} element={<OverallResults />} />
    </>
  )
);

export default router;
