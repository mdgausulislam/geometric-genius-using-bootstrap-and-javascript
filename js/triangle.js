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
    console.log('clicked');
    const rectangleW = getElementsById('rectangle-w');
    console.log(rectangleW);
    const rectangleI = getElementsById('rectangle-i');
    console.log(rectangleI);

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