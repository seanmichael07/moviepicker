import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-full justify-center content-center items-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary">
            <Link to="/dashboard">Back Home</Link>
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
