const app = document.getElementById("app")
//監控按鈕事件
app.addEventListener("click",function(e){
    let element = e.target
    if(element.className === 'size'){
        let updateInfo = {
            width: parseInt(element.dataset.width),
            height: parseInt(element.dataset.height)
        }
        chrome.windows.getCurrent(function(current){
            chrome.windows.update(current.id, updateInfo);
            window.close();
        })
    }
})
//監控按鍵 R 翻轉畫面
document.addEventListener('keydown', function(event) {
    if(event.key.toLowerCase() === 'r'){
        chrome.windows.getCurrent(function(current){
            let updateInfo = {
                width: parseInt(current.height),
                height: parseInt(current.width)
            }
            chrome.windows.update(current.id, updateInfo);
            window.close();
        })
    }
});
  