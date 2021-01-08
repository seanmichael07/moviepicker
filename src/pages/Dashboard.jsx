import React from "react";
import { Result, Button, Progress } from "antd";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div className="flex h-full justify-center content-center items-center">
      <Result
        title="Dashboard under construction!"
        extra={
          <div className="flex flex-col">
            <Progress
              type="dashboard"
              gapDegree={30}
              percent={68}
              showInfo={false}
              style={{ marginBottom: "8%" }}
            />
            <div>
              <Button type="primary">
                <Link to="/add-movie">Go to Add Movies</Link>
              </Button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Dashboard;
