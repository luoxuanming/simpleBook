import { createGlobalStyle } from 'styled-components'

export const Iconfont = createGlobalStyle`
  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1597849892283'); /* IE9 */
  src: url('./iconfont.eot?t=1597849892283#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUgAAsAAAAACeAAAATSAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqGXIVbATYCJAMYCw4ABCAFhG0HTxuICBEVpE2R/Sywm5OPsA21fWH5FYv0GclKH0n7vggK2u83e/ZFJCkSyS4JSnENDWL7KdC9hPfzeNpLf6dkBoqZPIHFCQiAxTlPYEyEGsm5sz37tks7Tml0cWmaWsHqWiwutZTxo0wAQxUoQK1/6dhAStd/oNcX1F/UCyZ0kD5eDAFJuuiCLbv7UoAbh1gmQEdpKXHAXbHhBtgibgwdex3oAziImzbSBQDek5/XPxiLGzB4C2LtfrJbIjg+43zujGr/v0VGKJBv5wGUQ2CBaQAHeur03QDKctMgktZfILMJQJo4BvfF+Uzlmflz7ufO/yMqKhESae9fHgiDxeNAAVCXZvx23sMXZ2BBll4FLRjUm6MQFr65LXjUO6PiGZnChnNyQAQ6B0GbRmO8NQ6P6aqL8HJzixG88a2QOfV5KvD2YYmIkQ6xsKFRHGcwKIxHtKXdEhuZXkw2/XA+OxTjXRFM6lmm0Q5N0U0saxYNZ1DOMAyJjiHR0MF28fDhCSJnM1uFxaLNnMBkUjvYLqJhDtlViSHBL8VgCOA0XgqeQYSFD8vjk5KhcfuJDoCk8CN4+yWsjk6vw9ttqTtWoXaN6DiOYRUdQ7WDuGD7cN0IUXKw1jZx1ZSyuE96XIY+o5NyuCNRdFWSMjgkQV/RkYhIpKbQqOvnD53KoNL2+AYoW/SBsau6k0wxCn2IbTNjEFu2m6AkIR13eDzX2Q7DD1Lbl2Vuf9bY8cH4wcM0fMazA4VLhrdjnn1EqoJ3Xq6PwoCFdHxAq4jl6wuBLuRo1aMq3m7FHdlybqmZrooBqnTAD4F+Py008LNIutC4t9MJZ3lP4FkHJ3mNAJ+51M3Wwfj3+k4KN5o6fqXfDqDIQ5oiFScYsH71jj9Uv4dy2cVytLCRVO+VLWwqJ5WRSEavYyMcSfa4qul6NYn/P7+w0u0DqCTn+DR7Nvn3bEHhSUsDjMNJP0eLlsYXRfg4Wj+JpheelxL73VT72JcHyzdB/K7oXRxv1npbNUa1tbVNOk8tuaAoKEgtb260pdU59ulpKhSbJyAnG+arJ2OUv2ednBKTnJ1cWvBLmHGN5cLbuUK4pt9bDqkmq6zoRLkBu8LiKpXtHq2b+/V9N4fphsW6bDnAh333ZdBjMHS0RSsWR96UYZOmzn7hUK4ZEx3vlIbUHj4WDkYX4kUb+uWNbkElABBdQN+sVMI9jg4iO+5/ewQB9wGaRYKay1WD5X84j7v1wW4xArZf48RD7/pMiFflaHScDMtlP5OeyfK/Tj6xxdlKYQ/ORA4WICCwDBwvJg9Jku9JoYSK3NvKUJncCCJOpQBDjA5Y4vTQDj8NnhQzEIgzB0mm8DicokQ+IOR4ACZpAhB5NoMhyxgseS6iHf4ueKq8hUBeCJIcYCInTDEQpDhcLDKPGfAJCkGt9J3+kDa/UXU1s2VlwvmjdUUS4iCqFx/Yot1ig+tV4r0EaamBO1wO65pAWypR+CD3XqdhKLseKBDUzA6zi0XmMQM+QSGolVFnf2h8/xtVVzM7gGiJ/tG6YnSIg2gC+qFrJyFeZbLrVeK95EXSUgN39GDt5Qh096wShQ/yBRmdhtROTtUFxxuauzwEJGfinsPcyMrJKyjGyumi3ThkVuSLE1vw4vjE1k1dw4gXsxkAAA==') format('woff2'),
  url('./iconfont.woff?t=1597849892283') format('woff'),
  url('./iconfont.ttf?t=1597849892283') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1597849892283#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconspin:before {
  content: "\e606";
}

.iconsearch:before {
  content: "\e623";
}

.iconAa:before {
  content: "\e636";
}

.iconbi:before {
  content: "\e742";
}

.iconPensyumaobi:before {
  content: "\e708";
}
`

