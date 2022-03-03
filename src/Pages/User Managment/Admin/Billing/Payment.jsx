import { Box, Card, CardContent, Grid } from "@material-ui/core";
import React from "react";
import { MTable } from "../../../../Components";

export default function Payment() {
  const styles = {
    bgcolor: "var(--white)",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
    width: "800px",
    margin: "20px 0",
  };

  return (
    <>
      <Box sx={styles}>
        <Grid container>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    xxxxxxxxx
                  </Grid>
                  <Grid item xs={4}>
                    exp xx/xx
                  </Grid>
                  <Grid item xs={4}>
                    Cvv xxx
                  </Grid>
                  <Grid item xs={4}>
                    <img
                      style={{
                        width: "50px",
                      }}
                      src="https://i.ibb.co/qnrzFyb/toppng-com-visa-us-vector-logo-free-download-400x400.png"
                      alt="hhh"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <div
              style={{
                // border: "2px solid black",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>Your Balance</div>
              <div> USD $ 12.00</div>
            </div>
          </Grid>
          <Grid item xs={3}>
            hello
          </Grid>
          <Grid item xs={8}>
            Recent transactions
            <MTable
              title=""
              options={{
                search: false,
              }}
              columns={[
                {
                  title: "Service Name",
                  field: "service",
                },
                {
                  title: "Amount",
                  field: "amount",
                },
              ]}
              tableData={[
                { service: "Service 01", amount: 100 },
                { service: "Service 02", amount: 200 },
                { service: "Service 03", amount: 300 },
              ]}
              pageSize={3}
            />
          </Grid>
        </Grid>
      </Box>
      <MTable
        columns={[
          {
            title: "Date",
            field: "date",
          },
          {
            title: "Status",
            field: "status",
          },
          {
            title: "Amount",
            field: "amount",
          },
        ]}
        
      />
    </>
  );
}
