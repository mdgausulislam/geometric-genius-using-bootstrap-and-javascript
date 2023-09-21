document.getElementById('btn-triangle').addEventListener('click', function () {
    console.log('clicked');
    const triangleB = getElementsById('triangle-b');
    console.log(triangleB);
    const triangleH = getElementsById('triangle-h');
    console.log(triangleH);

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
    setTextElementsById('triangle-Output',meterOutput);

    const miterTextConvert=document.getElementById('meter-text-convert');
    miterTextConvert.innerHTML='m<sup>2</sup>';

})