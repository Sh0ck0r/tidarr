import { ProcessingItemType } from "@/app/types";
import styled from "@emotion/styled";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TerminalIcon from '@mui/icons-material/Terminal';

export const TerminalDialog = ({ item }: { item: ProcessingItemType }) => {

  const [openOutput, setOpenOutput] = useState(false);
  const refOutput = useRef<null | HTMLPreElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (refOutput.current) {
        refOutput.current.scrollTop = refOutput.current?.scrollHeight, 500
      }
    }, 100);
  }, [item.output, openOutput])

  return (
    <div>
      <TerminalButton onClick={() => setOpenOutput(true)}><TerminalIcon /></TerminalButton>
      <Dialog
        open={openOutput}
        onClose={() => setOpenOutput(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Console output</DialogTitle>
        <Pre ref={refOutput}>{item.output}</Pre>
        <DialogActions>
          <Button onClick={() => setOpenOutput(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};

const Pre = styled.pre`
  background-color: #000;
  font-size: 0.68rem;
  margin: 0;
  padding: 0.5rem;
  overflow: auto;
`;

const TerminalButton = styled(Button)`
  margin: 0 0.5rem 0 0;
  min-width: 0;
  padding: 0;
`;