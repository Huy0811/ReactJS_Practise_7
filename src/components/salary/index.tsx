import React, { useEffect, useState } from "react";

const Salary = () => {
  const [luongCoBan, setLuongCoBan] = useState(0);
  const [thucLanh, setThucLanh] = useState(0);
  useEffect(() => {
    setThucLanh(luongCoBan * 6);
  }, [luongCoBan]);
  return (
    <>
      <p>Lương cơ bản: </p>
      <input
        type="number"
        value={luongCoBan}
        onChange={(e) => setLuongCoBan(Number(e.currentTarget.value))}
      />
      <p>Thực lãnh</p>
      <p>{thucLanh}</p>
    </>
  );
};

export default Salary;
