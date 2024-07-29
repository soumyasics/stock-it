import React from "react";
import { Alert } from "react-bootstrap";

function CompanyProfileDividend({ dividend }) {
  return (
    <div className="profile-dividend">
      <div className="w-50">
        {dividend.length==0?
        <h1 className="fs-2 text-center mt-5">No Dividend Announcements Yet!</h1>:
        <>
        
        <div className="divdend-headPart">Dividend Announcement</div>
        {dividend.map((e) => {
          return (
            <div className="divident-bodyPart">
              <Alert variant="success">
                A dividend of {e.dividentPerShare} rupees per share was successfully announced on
                the {e.createdAt.substring(0,10)}. The total cost {e?.totalDividentAmount} rupees.
              </Alert>
            </div>
          );
        })}
        </>
}
      </div>
    </div>
  );
}

export default CompanyProfileDividend;
