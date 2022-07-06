import React, { useEffect, useState } from 'react'

var barr = 0;
var tailLong = 20;
var useEffectCheck = 1;
var useEffectCheck1 = 0;
var useEffectCheck2 = 1;
let s;
var try1 = 0;



console.log("Denemee.jsx calisti")

function Denemee() {
    const board_size = 20;
    const [foodred, setFoodred] = useState([19,19])
    const [tail, setTail] = useState([[5,6]])
    const [move_h, setMove_h] = useState(1)
    const [move_w, setMove_w] = useState(1)
    const [keyboard, setkeyboard] = useState(0)
    const [color, setColor] = useState(new Array(board_size).fill(0).map(row => new Array(board_size).fill(0)))

    function startt(e) {
        setkeyboard(e.keyCode)
        clearInterval(barr)
        console.log(e)
        console.log(barr)

    }
    function deleteTail() {
        var lastDeleteTail = tail.shift()
        console.log(lastDeleteTail)
        setColor((data => {
            data[lastDeleteTail[0]][lastDeleteTail[1]] = 0
            console.log(lastDeleteTail[0], lastDeleteTail[1])
            return data
        }))
    }

    useEffect(() => {
        if (useEffectCheck2 == 2) {
            window.addEventListener("keydown", startt);
            var aboefji = Math.floor(Math.random() * board_size)
            var fefnfkj = Math.floor(Math.random() * board_size)
            setFoodred(() => [aboefji,fefnfkj])
            setColor((data) => { data[aboefji][fefnfkj] = 2; return data })
        } else { useEffectCheck2++ }
    }, [])
    useEffect(() => { if (useEffectCheck == 2) { tat() } else { useEffectCheck++ } }, [move_h, move_w])
    useEffect(() => {

        if (useEffectCheck1 == 2) {
            barr = setInterval(() => {
                switch (keyboard) {
                    case 39:
                        console.log("switch right" + keyboard)
                        return move_Hor_Right()
                    case 40:
                        console.log("switch down" + keyboard)
                        return move_Wer_Down()
                    case 37:
                        console.log("switch left" + keyboard)
                        return move_Hor_Left()
                    case 38:
                        console.log("switch up" + keyboard)
                        return move_Wer_Up()

                    default:
                        console.log("switch errrooor")
                        break;
                }
            }, 200)
        } else { useEffectCheck1++ }
        console.log(useEffectCheck1)
    }, [keyboard])

    function show() {

        console.log(tail)



    }
    function tat() {
        if (move_w >= 0 && move_h >= 0 && move_h < board_size && move_w < board_size) {
            setColor((data) => {
                data[move_w][move_h] = true
                setTail((firstData) => [...firstData, [move_w, move_h]])
                
                if (tail.length >= tailLong) {
                    
                    deleteTail()
                }

                return data
            })
        }
        else {
            myClearInterval()
            alert("game over")
        }
        food()
    }
    function myClearInterval() {
        console.log(barr)
        clearInterval(barr)
    }
    function move_Hor_Right() {
        setMove_h((data) => {
            data++
            return data
        })
    }
    function move_Hor_Left() {
        setMove_h((data) => {
            data--
            return data
        })
    }
    function move_Wer_Down() {
        setMove_w((data) => {
            data++
            return data
        })
    }
    function move_Wer_Up() {
        setMove_w((data) => {
            data--
            return data
        })
    }
    function food() {
        
        console.log(tail[tail.length - 1])
        console.log(foodred)
        if (tail[tail.length - 1][0] == foodred[0] && tail[tail.length - 1][1] == foodred[1] ) { 
        tailLong++
        var aboefji = Math.floor(Math.random() * board_size)
        var fefnfkj = Math.floor(Math.random() * board_size)
        setFoodred([aboefji,fefnfkj])
        setColor((data) => { data[aboefji][fefnfkj] = 2; return data })
    }
    }


    return (
        console.log("render calisti"),
        <div className='main-div'>
            <button className='main-button' onClick={show}>show</button>
            <button className='main-button' onClick={deleteTail}>delete tail</button>
            <button className='main-button' onClick={food}>food</button>
            <button className='move-button up' onClick={()=>startt({keyCode:38})}>up</button>
            <button className='move-button down'onClick={()=>startt({keyCode:40})}>down</button>
            <button className='move-button left'onClick={()=>startt({keyCode:37})}>left</button>
            <button className='move-button right'onClick={()=>startt({keyCode:39})}>right</button>
            <div className='game-div'>
            {color.map((row, rowIndex) => (<div className='row' key={rowIndex}>{
                row.map((cell, cellIndex) => (<div className={`cell ${cell === 2 ? "food-cell" : ""}${cell === true ? "snake-cell" : ""}`} key={cellIndex}></div>))
            }</div>))}

       </div> 
       </div>
    )
}

export default Denemee


