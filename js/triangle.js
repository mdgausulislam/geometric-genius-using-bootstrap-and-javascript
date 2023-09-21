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