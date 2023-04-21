$(document).ready(function () {
    $(function () {
        sort()
    })
    /*-------------------------Сортування------------------*/
    function sort() {

        let pos = [
            [0, 0], [0, 65], [0, 130], [0, 195],
            [65, 0], [65, 65], [65, 130], [65, 195],
            [130, 0], [130, 65], [130, 130], [130, 195],
            [195, 0], [195, 65], [195, 130], [195, 195],
        ]
        let randPos, numPazz = 16
        for (let i = 1; i <= numPazz; i++) {
            randPos = pos[Math.floor(Math.random() * pos.length)];
            $(`#left>div:nth-child(${i})`).css('top', `${randPos[0]}px`)
            $(`#left>div:nth-child(${i})`).css('left', `${randPos[1]}px`)
            pos.splice(pos.indexOf(randPos), 1)

        }


    }
    /*-------------------------------------------------------------------*/


    let a = '';
    let b = '';
    let dragPazz


    $('.pazzl').on('mouseup', function () {
        let x = $(this).position()

        if (x.top > 195) {
            a = 195
        }
        if (x.top >= 130 && x.top <= 194) {
            a = 130
        }
        if (x.top >= 65 && x.top <= 129) {
            a = 65
        }
        if (x.top >= 0 && x.top <= 64) {
            a = 0
        }

        let y
        if (x.left > 260) {
            y = x.left - 300
        } else {
            y = x.left
        }
        if (y > 195) {
            b = 195
        }
        if (y >= 130 && y <= 194) {
            b = 130
        }
        if (y >= 65 && y <= 129) {
            b = 65
        }
        if (y >= 0 && y <= 64) {
            b = 0
        }
        dragPazz = $(this)
        console.log(x.top)
        console.log(x.left)
    })


    $('.imgbox').sortable({
        connectWith: '#right',
        helper: 'original',
        stop: function () {
            $(dragPazz).css(`top`, `${a}px`)
            $(dragPazz).css(`left`, `${b}px`)

        }

    })


    $('.pazzl').on('mouseup', function () {
        let tm = $('.clock').text()
        console.log(tm);
        if (tm == '00:00') {
            timer()
        }
        $('#start').attr('disabled', true);
    })


    /*---------------------------таймер-----------------------*/
    let tim
    function timer() {
        let tm = document.querySelector('.clock')
        let x = '02'
        let y = '00'
        tm.textContent = `${x}:${y}`;
        tim = setInterval(() => {
            if (y == 00) {
                x -= 1;
                y = 59;
                if (x < 10) x = '0' + x;
                if (y < 10) y = '0' + y;
            }
            y -= 1;
            tm.textContent = `${x}:${y}`;
            let stop = '00:01'
            if (tm.textContent < stop) {
                clearInterval(tim)
                check()
            }
        }, 1000)

    }
    /*---------------------------Перевірка----------------------*/

    let puzzle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    let ch = true
    function check() {
        for (let i = 0; i < $('.pazzl').length; i++) {
            if ($('.pazzl').eq(i).text() != puzzle[i]) {
                ch = false
                break

            }

        }
        console.log(ch);
        if (ch) {
            $('.modShad').css({
                display: 'flex'
            })
            $('p').text('Woohoo, well done, you did it!')
            $('.rmBatt').css({
                display: 'none'
            })
        } else {
            $('.modShad').css({
                display: 'flex'
            })
            $('p').text(`It's a pity, but you lost`)
            $('.rmBatt').css({
                display: 'none'
            })
            $('#result').attr('disabled', true);

        }
    }
    /*--------------------Кнопки--------------------*/
    $('#start').on('click', function () {
        timer()
        $(this).attr('disabled', true);

    })
    let set;
    $('#result').on('click', function () {
        $('.modShad').css({
            display: 'flex'
        })
        set = setInterval(() => {
            let modTime = document.querySelector('.clock').textContent
            $('p').text(`You still have time, you sure? ${modTime}`)
        }, 1)
    })

    $('.rmBatt').on('click', function () {
        $('.modShad').css({
            display: 'none'
        })
        $('p').text('')
        check()
        clearInterval(tim)
        clearInterval(set)


    })
    $('.lmBatt').on('click', function () {
        $('.modShad').css({
            display: 'none'
        })
    })
    $('#new').on('click', function () {
        clearInterval(tim)
        $('.clock').text('00:00')
        $('#left').append($('#right>div'))
        sort()
        $('#start').attr('disabled', false);
        $('#result').attr('disabled', true);





    })

    /*----------------------------------------------*/

});