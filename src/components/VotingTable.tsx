import { useState } from "react";

const VotingTable = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [clickedRow, setClickedRow] = useState<number | null>(null);
  const candidate = {
    name: "मा.श्री. उदयचंद्र(भैय्यासाहेब) प्रभाकर खंडागळे",
    symbol: "/logo.png",
    img: "/user.png",
    number: 1,
  };

  const handleVoteClick = (rowNum: number) => {
    setClickedRow(rowNum);
    const audio = new Audio("/khandagale voice.mpeg");
    audio.play();
    setTimeout(() => {
      setShowPopup(true);
    }, 5000);
  };

  return (
    <div className="container mt-2">
      <img
        src="../../public/banner.jpg"
        alt="banner"
        className="w-100 h-auto"
      />

      {/* Date Section */}
      <div className="text-center bg-primary text-white mt-2 p-2 rounded">
        <strong>मतदान दिनांक ०२ डिसेंबर २०२५ स.०७:०० ते सायं.०६:००</strong>
      </div>

      {/* Table */}
      <div className="table-responsive mt-2">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-primary" style={{ fontSize: "11px" }}>
            <tr className="bg-primary">
              <th>अ.क्र</th>
              <th>उमेदवाराचे नाव</th>
              <th>निवडणूक चिन्ह</th>
              <th>बटन</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1.</td>
              <td></td>
              <td></td>

              <td className="d-flex align-items-center  justify-content-between gap-1">
                <span
                  className="d-inline-block rounded-circle ms-1 bg-danger"
                  style={{
                    width: "12px",
                    height: "12px",
                  }}></span>

                <button className="btn btn-primary rounded-pill px-4 py-3 me-1"></button>
              </td>
            </tr>
            <tr className="">
              <td>2.</td>

              <td>
                <div
                  style={{ fontSize: "9px" }}
                  className="d-flex align-items-center ">
                  <img
                    src="../../public/passport.png"
                    className="mx-1"
                    width="25"
                    height="25"
                  />
                  <b> श्री.उदयचंद्र(भैय्यासाहेब)&nbsp;प्रभाकर&nbsp;खंडागळे</b>
                </div>
              </td>

              <td>
                <img
                  src={candidate.symbol}
                  alt="symbol"
                  style={{ width: "60px", height: "35px" }}
                />
              </td>

              <td className="d-flex align-items-center justify-content-between gap-2">
                {/* SMALL DOT */}
                <span
                  className={`d-inline-block rounded-circle ms-1 ${
                    clickedRow === 1 ? "bg-success" : "bg-danger"
                  }`}
                  style={{
                    width: "12px",
                    height: "12px",
                  }}></span>

                <button
                  className="btn btn-primary rounded-pill me-1 px-2"
                  style={{ fontSize: "13px" }}
                  onClick={() => handleVoteClick(1)}>
                  मत&nbsp;द्या
                </button>
              </td>
            </tr>

            {/* ------- EMPTY ROWS ------- */}
            {[3, 4, 5, 6, 7, 8, 9].map((num) => (
              <tr key={num}>
                <td>{num}.</td>
                <td></td>
                <td></td>

                <td className="d-flex align-items-center  justify-content-between gap-1">
                  {/* Dot for every row */}
                  <span
                    className="d-inline-block rounded-circle ms-1 bg-danger"
                    style={{
                      width: "12px",
                      height: "12px",
                    }}></span>

                  <button className="btn btn-primary rounded-pill px-4 py-3 me-1"></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="text-center text-bold mb-3">
          <div>
            Developed by <b>Vishal Vijaykumar Pawar</b>
          </div>
          <b>7722002544</b>
        </div>
      </div>

      {/* ------------------------ POPUP ------------------------ */}
      {showPopup && (
        <div
          className="modal fade show d-flex align-items-center justify-content-center"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.5)",
            minHeight: "100vh",
          }}>
          <div className="modal-dialog">
            <div className="modal-content p-3 rounded">
              <button
                className="btn-close ms-auto"
                onClick={() => setShowPopup(false)}></button>

              <div className="text-center">
                <img
                  src={candidate.symbol}
                  alt="candidate"
                  className="rounded-circle border border-3"
                  style={{ width: "90px", height: "60px" }}
                />

                <h4 className="mt-3">{candidate.name}</h4>

                <p className="mt-1">
                  <b>चिन्ह:</b> घड्याळ <br />
                  <b>क्रमांक:</b> 1
                </p>

                <div className="d-flex align-items-center justify-content-center bg-success bg-opacity-25 p-2 rounded mt-2">
                  <span
                    className="me-2"
                    style={{ color: "green", fontSize: "22px" }}>
                    ✔
                  </span>
                  <span>तुमचे मत नोंदवले गेले आहे.</span>
                </div>

                <p className="fw-bold mt-2">
                  आपण {candidate.name} यांना मत दिले आहे.
                </p>
              </div>
              <button
                className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2 rounded-3 py-2 mt-3"
                onClick={() => {
                  const link = "https://example.com"; // your dummy link
                  const message = `Check this link: ${link}`;
                  const whatsappURL = `https://wa.me/?text=${encodeURIComponent(
                    message
                  )}`;

                  window.open(whatsappURL, "_blank");
                }}>
                <i className="bi bi-whatsapp"></i> शेअर करा
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VotingTable;
