import { useCallback, useState } from "react";
import { PatientDTO } from "../../dto/patient";
import HttpService from "../../infra/http-service";
import { ENDPOINTS, HOSTS } from "../../config/api";

type HttpState<T = null> = {
  data: T | null;
  error: boolean;
  loading: boolean;
};

const initialState = {
  data: null,
  error: false,
  loading: false,
};

export const useGetPatients = () => {
  const [httpState, setHttpState] =
    useState<HttpState<PatientDTO>>(initialState);

  const getPatients = useCallback(
    async (signal?: AbortController["signal"]) => {
      const httpService = new HttpService(signal);
      setHttpState({ ...initialState, loading: true });
      try {
        const response = await httpService.get<PatientDTO>(
          `${HOSTS.API_PATIENTS}${ENDPOINTS.PATIENTS}`
        );
        setHttpState({
          data: response,
          loading: false,
          error: false,
        });
      } catch (err) {
        setHttpState({ data: null, error: true, loading: false });
      }
    },
    []
  );

  return {
    getPatients,
    ...httpState,
  };
};
