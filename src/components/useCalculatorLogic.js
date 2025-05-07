import { useState } from 'react';

function useCalculatorLogic() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setInput('');
    } else if (value === '=') {
      try {
        // 간단하게 eval을 사용 (실제 서비스에서는 안전한 파서 사용 권장)
        const result = eval(input);
        setInput(String(result));
      } catch (e) {
        setInput("Error");
        console.log(e);
      }
    } else if (value === '√') {
      // 루트 계산: 현재 입력된 값의 제곱근 계산
      const num = parseFloat(input);
      if (!isNaN(num)) {
        const result = Math.sqrt(num);
        setInput(String(result));
      }
    } else if (value === 'x²') {
      // 제곱 계산: 현재 입력된 값의 제곱
      const num = parseFloat(input);
      if (!isNaN(num)) {
        const result = Math.pow(num, 2);
        setInput(String(result));
      }
    } else if (value === '%') {
      // 백분율 계산: 현재 입력된 값을 100으로 나눔
      const num = parseFloat(input);
      if (!isNaN(num)) {
        const result = num / 100;
        setInput(String(result));
      }
    } else {
      setInput(input + value);
    }
  };

  return { input, handleButtonClick };
}

export default useCalculatorLogic;
