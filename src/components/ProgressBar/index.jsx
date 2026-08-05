import { useEffect, useState } from "react";
import styled from "styled-components";

const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  z-index: 9999;
  background: linear-gradient(90deg, 
    ${({ theme }) => theme.colors.blue}, 
    ${({ theme }) => theme.colors.green}, 
    ${({ theme }) => theme.colors.red}
  );
  width: ${({ $scrollPercent }) => $scrollPercent}%;
  transition: width 0.1s linear;
`;

function ProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const totalHeight = h.scrollHeight - h.clientHeight;
      if (totalHeight > 0) {
        const scrolled = (h.scrollTop / totalHeight) * 100;
        setScrollPercent(scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <Bar $scrollPercent={scrollPercent} />;
}

export default ProgressBar;
