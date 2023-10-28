import { HOSTS, ENDPOINTS } from "@src/config/api";
import { PatientDTO } from "@src/dto/patient";
import HttpService from "@src/infra/http/http-service";
import { useCallback, useState } from "react";

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
