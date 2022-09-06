import React, { useCallback, useEffect, useMemo, useState } from "react"

const INITIAL_DOLLAR = 680

const AmountConverter = () => {
  const [amount, setAmount] = useState(0)
  const [dollarValue, setDollarValue] = useState(INITIAL_DOLLAR)

  const onChangeAmount = useCallback((e) => {

    setAmount(e.target.value)
  }, [setAmount])

  const onChangeDollarValue = useCallback((e) => {

    setDollarValue(e.target.value)
  }, [setDollarValue])

  useEffect(() => {
    alert("Bienvenido!")

    return () => alert("Adios!")
  }, [])

  useEffect(() => {
    if(Number(dollarValue) === INITIAL_DOLLAR) {
      alert("El dolar volvió a su valor inicial")
    }
    else {
      alert("El dolar volvió a cambiar de valor")
    }
  }, [dollarValue])


  const conversion = useMemo(() => {
    return dollarValue * amount
  }, [amount, dollarValue])

  return (
    <div>
      Amount: <input value={amount} onChange={onChangeAmount} />
      <br></br>
      Dollar Value: <input value={dollarValue} onChange={onChangeDollarValue} />
      <div>Conversion: {conversion}</div>
    </div>
  )
}

export default AmountConverter