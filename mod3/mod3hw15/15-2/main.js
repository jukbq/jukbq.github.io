
$(document).ready(function () {
    let s1 = $('#s1').html()
    let s2 = $('b.s2').html()
    let s3 = $('#second i').html()
    let s4 = $('q[title="hello"]').html()
    let s5 = $('a[target="_blank"]').html()
    let s6 = $('.extra:eq(1)').html()
    alert(s1 + s2 + s3 + s4 + s5 + s6)
})
