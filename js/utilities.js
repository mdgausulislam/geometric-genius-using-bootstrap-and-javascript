function getElementsById(elementId){
    const triangleItems=document.getElementById(elementId);
    const newTriangleItemsString=triangleItems.value;
    const newTriangleItems=parseFloat(newTriangleItemsString);
    return newTriangleItems;
}

function getElementsByIdText(elementText){
    const triangleItemText=document.getElementById(elementText);
    const newTriangleItemsTextString=triangleItemText.innerText;
    const newTriangleItemsText=parseFloat(newTriangleItemsTextString);
    return newTriangleItemsText;
}