import { useState } from "react";
import { Alert, TextField, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Autocomplete } from "@mui/material";
import { Page } from "../../components/PageWrapper";
import { useForm, Controller } from "react-hook-form";
import { solveClock, type SolveFormValues, type SolveRow } from "./solver";

import { A } from "../../constants"

type SolveArrayFormValues = {
  pinOrder: string[];
  clockScramble: string[];
  clockStates: string[];
};

export const SolvePage = () => {
  const { control, handleSubmit } = useForm<SolveArrayFormValues>({
    defaultValues: {
      pinOrder: [],
      clockScramble: [],
      clockStates: [],
    },
  });
  const [rows, setRows] = useState<SolveRow[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [warnings, setWarnings] = useState<string[]>([]);

  const onSubmit = (data: SolveArrayFormValues) => {
    const payload: SolveFormValues = {
      pinOrder: data.pinOrder.join(" "),
      clockScramble: data.clockScramble.join(" "),
      clockStates: data.clockStates.join(" "),
    };

    try {
      const result = solveClock(payload);
      setRows(result.rows);
      setWarnings(result.warnings);
      setErrorMessage("");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to solve with the provided input.";
      setRows([]);
      setWarnings([]);
      setErrorMessage(message);
    }
  };

  // Put your mouse on top of A
  console.log(A);

  return (
    <div>
      <Page title="Solve">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Controller
              name="pinOrder"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  multiple
                  freeSolo
                  options={[]}
                  value={field.value}
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => <TextField {...params} label="Pin order" variant="outlined" fullWidth />}
                />
              )}
            />
            <hr style={{ width: "100%" }} />
            <Controller
              name="clockScramble"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  multiple
                  freeSolo
                  options={[]}
                  value={field.value}
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => <TextField {...params} label="Clock scramble (WCA)" variant="outlined" fullWidth />}
                />
              )}
            />
            <Controller
              name="clockStates"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  multiple
                  freeSolo
                  options={[]}
                  value={field.value}
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => <TextField {...params} label="Clock states" variant="outlined" fullWidth />}
                />
              )}
            />
            <Button type="submit" variant="contained">Submit</Button>

            {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
            {warnings.map((warning) => (
              <Alert key={warning} severity="warning">{warning}</Alert>
            ))}
            
            <hr style={{ width: "100%" }} />

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Pin State</TableCell>
                    <TableCell>Front Move</TableCell>
                    <TableCell>Back Move</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.pinState}>
                      <TableCell>{row.pinState}</TableCell>
                      <TableCell>{row.frontMove}</TableCell>
                      <TableCell>{row.backMove}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </form>
      </Page>
    </div>
  );
}
