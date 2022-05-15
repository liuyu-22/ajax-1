let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send;
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      dom.getElementsByTagName("warning")[0].textContent;
      const object = JSON.parse(request.response); // 可以把符合JSON语法的字符串，变成对应的对象/其他东西
      myName.textContent = object.name;
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML;
      dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    const div = document.createElement("div"); //创建div
    div.innerHTML = request.response; //填写div内容
    document.body.appendChild(div); //插入到body里
  };
  request.onerror = () => {};
  request.send;
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    //创建script标签
    const script = document.createElement("script");
    //填写script内容
    script.innerHTML = request.response;
    //插入body内
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send;
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    //下载完成 但不知道成功还是失败
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建style标签
        const style = document.createElement("style");
        //填写style内容
        style.innerHTML = request.response;
        //插入head内
        document.head.appendChild(style);
      } else {
        alert("加载css失败");
      }
    }
  };
  request.send();
};
