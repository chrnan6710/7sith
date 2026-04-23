import { Typography } from "@mui/material"

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const Page = (props: Props) => { 
  
  const { title = "", children } = props;
  
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h3">{title}</Typography>
      {children}
    </div>
  );
}


