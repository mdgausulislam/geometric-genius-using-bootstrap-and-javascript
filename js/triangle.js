document.getElementById('btn-triangle').addEventListener('click', function () {
    // console.log('clicked');
    const triangleB = getElementsById('triangle-b');
    // console.log(triangleB);
    const triangleH = getElementsById('triangle-h');
    // console.log(triangleH);

    const triangleTextB = getElementsByIdText('triangle-text-b');
    setTextElementsById('triangle-text-b', triangleB)

    const triangleTextH = getElementsByIdText('triangle-text-h');
    setTextElementsById('triangle-text-h', triangleH);

    const triangleOutput = 0.5 * triangleB * triangleH;
    console.log(triangleOutput);

    const triangleO = getElementsByIdText('triangle-Output');
    setTextElementsById('triangle-Output', triangleOutput);
})

document.getElementById('meter-convert').addEventListener('click', function () {
    const meterConvert = getElementsByIdText('triangle-Output');
    const meterOutput = meterConvert / 100;
    setTextElementsById('triangle-Output', meterOutput);

    const miterTextConvert = document.getElementById('meter-text-convert');
    miterTextConvert.innerHTML = 'm<sup>2</sup>';
})

document.getElementById('rectangle-btn').addEventListener('click', function () {
    // console.log('clicked');
    const rectangleW = getElementsById('rectangle-w');
    // console.log(rectangleW);
    const rectangleI = getElementsById('rectangle-i');
    // console.log(rectangleI);

    const rectangleTextB = getElementsByIdText('rectangle-text-w');
    setTextElementsById('rectangle-text-w', rectangleW)

    const rectangleTextH = getElementsByIdText('rectangle-text-i');
    setTextElementsById('rectangle-text-i', rectangleI);

    const rectangleOutput = rectangleW * rectangleI;
    console.log(rectangleOutput);

    const rectangleO = getElementsByIdText('rectangle-Output');
    setTextElementsById('rectangle-Output', rectangleOutput);
})

document.getElementById('meter-convert1').addEventListener('click', function () {
    const meterConvert = getElementsByIdText('rectangle-Output');
    const meterOutput = meterConvert / 100;
    setTextElementsById('rectangle-Output', meterOutput);

    const miterTextConvert = document.getElementById('meter-text-convert1');
    miterTextConvert.innerHTML = 'm<sup>2</sup>';
})

document.getElementById('Parallelogram-btn').addEventListener('click', function () {
    console.log('clicked');
    const parallelogramB = getElementsById('parallelogram-b');
    console.log(parallelogramB);
    const parallelogramH = getElementsById('parallelogram-h');
    console.log(parallelogramH);

    const parallelogramTextWw = getElementsByIdText('parallelogram-text-w');
    setTextElementsById('parallelogram-text-w', parallelogramB)

    const parallelogramTextI = getElementsByIdText('parallelogram-text-i');
    setTextElementsById('parallelogram-text-i', parallelogramH);

    const parallelogramOutput = parallelogramB * parallelogramH;
    console.log(parallelogramOutput);

    const rectangleO = getElementsByIdText('parallelogram-output');
    setTextElementsById('parallelogram-output', parallelogramOutput);
})

document.getElementById('meter-convert3').addEventListener('click', function () {
    const meterConvert = getElementsByIdText('parallelogram-output');
    const meterOutput = meterConvert / 100;
    setTextElementsById('parallelogram-output', meterOutput);

    const miterTextConvert = document.getElementById('meter-text-convert2');
    miterTextConvert.innerHTML = 'm<sup>2</sup>';
})




document.getElementById('rhombus-btn').addEventListener('click', function () {
    // console.log('clicked');
    const rhombusD1 = getElementsById('rhombus-d1');
    // console.log(triangleB);
    const rhombusD2 = getElementsById('rhombus-d2');
    // console.log(triangleH);

    const rhombusTextD1 = getElementsByIdText('rhombus-text-d1');
    setTextElementsById('rhombus-text-d1', rhombusD1)

    const rhombusTextD2 = getElementsByIdText('rhombus-text-d2');
    setTextElementsById('rhombus-text-d2', rhombusD2);

    const rhombusOutput = 0.5 * rhombusD1 * rhombusD2;
    console.log(rhombusOutput);

    const rhombusO = getElementsByIdText('rhombus-output');
    setTextElementsById('rhombus-output', rhombusOutput);
})

document.getElementById('meter-convert4').addEventListener('click', function () {
    const meterConvert = getElementsByIdText('rhombus-output');
    const meterOutput = meterConvert / 100;
    setTextElementsById('rhombus-output', meterOutput);

    const miterTextConvert = document.getElementById('meter-text-convert3');
    miterTextConvert.innerHTML = 'm<sup>2</sup>';
})


document.getElementById('Pentagon-btn').addEventListener('click', function () {
    // console.log('clicked');
    const PentagonP = getElementsById('Pentagon-p');
    // console.log(triangleB);
    const PentagonB = getElementsById('Pentagon-b');
    // console.log(triangleH);

    const pentagonTextP = getElementsByIdText('pentagon-text-p');
    setTextElementsById('pentagon-text-p', PentagonP)

    const pentagonTextB = getElementsByIdText('pentagon-text-b');
    setTextElementsById('pentagon-text-b', PentagonB);

    const PentagonOutput = 0.5 * PentagonP * PentagonB;
    console.log(PentagonOutput);

    const PentagonO = getElementsByIdText('pentagon-output');
    setTextElementsById('pentagon-output', PentagonOutput);
})

document.getElementById('meter-convert5').addEventListener('click', function () {
    const meterConvert = getElementsByIdText('pentagon-output');
    const meterOutput = meterConvert / 100;
    setTextElementsById('pentagon-output', meterOutput);

    const miterTextConvert = document.getElementById('meter-text-convert5');
    miterTextConvert.innerHTML = 'm<sup>2</sup>';
})

document.getElementById('ellipse-btn').addEventListener('click', function () {
    // console.log('clicked');
    const ellipseA = getElementsById('ellipse-a');
    // console.log(triangleB);
    const ellipseB = getElementsById('ellipse-b');
    // console.log(triangleH);

    const ellipseTextA = getElementsByIdText('ellipse-text-a');
    setTextElementsById('ellipse-text-a', ellipseA)

    const ellipseTextB = getElementsByIdText('ellipse-text-b');
    setTextElementsById('ellipse-text-b', ellipseB);

    const ellipseOutput = (3.1416 * ellipseA * ellipseB).toFixed(2);
    console.log(ellipseOutput);

    const PentagonO = getElementsByIdText('ellipse-output');
    setTextElementsById('ellipse-output', ellipseOutput);
})

document.getElementById('meter-convert6').addEventListener('click', function () {
    const meterConvert = getElementsByIdText('ellipse-output');
    const meterOutput = (meterConvert / 100).toFixed(2);
    setTextElementsById('ellipse-output', meterOutput);

    const miterTextConvert = document.getElementById('meter-text-convert6');
    miterTextConvert.innerHTML = 'm<sup>2</sup>';
})

document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href='index2.html';
})