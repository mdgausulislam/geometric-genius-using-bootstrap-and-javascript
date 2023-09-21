document.getElementById('btn-triangle').addEventListener('click',function(){
    console.log('clicked');
    const triangleB=getElementsById('triangle-b');
    console.log(triangleB);
    const triangleH=getElementsById('triangle-h');
    console.log(triangleH);

    const triangleTextB=getElementsByIdText('triangle-text-b');
    setTextElementsById('triangle-text-b',triangleB)
    
    const triangleTextH=getElementsByIdText('triangle-text-h');
    
    setTextElementsById('triangle-text-h',triangleH);
    
})