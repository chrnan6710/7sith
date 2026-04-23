import * as math from 'mathjs';

export type SolveFormValues = {
	pinOrder: string;
	clockScramble: string;
	clockStates: string;
};

export type SolveRow = {
	pinState: string;
	frontMove: string;
	backMove: string;
};

export type SolverResult = {
	rows: SolveRow[];
	warnings: string[];
};

// The front/back moves are supposed to be numbers between -5 and 6, first of all
// Also it's supposed to involve matrix inversion


// Here, this will be your main function that will solve the clock.
// You will need to slowly build up the logic to solve the clock, 
// and you can use helper functions as needed.
// Understood!!

// as you can see, you can return messages to the front end, which will be displayed as warnings. You can use this to give hints to the user, or to indicate that something is wrong with their input. 
// You can also return rows, which will be displayed as the solution to the clock.

function sampleSum(): number {
  return math.add(5, 3);
}

export function solveClock(input: SolveFormValues): SolverResult {
  console.log("Solving clock with input:", input);

  const result = sampleSum(); // Just to show that mathjs is working, you can remove this later.
  console.log("Sample sum result (5 + 3):", result);
  
  const rows: SolveRow[] = [];
	const warnings: string[] = ["Aleph is a good boy!"]; // Ruff!!

	return { rows, warnings };
}
