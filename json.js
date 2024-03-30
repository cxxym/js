
   

//指定确定按钮点击时要执行的动作 
ui.ok.click(function() {
    //通过getText()获取输入的内容 //var name = ui.name.getText(); 
    var phone = ui.phone.text();
    var name = ui.name.text();
    var nameb = ui.nameb.text();
    var namegs = ui.namegs.text();

    var filePath = "/sdcard/data.json"; // JSON 文件路径

    // 检测文件是否存在
    if (!files.exists(filePath)) {
        // 文件不存在，创建空的 JSON 数据并写入文件中
        var emptyData = {};
        var jsonData = JSON.stringify(emptyData);
        // 写入空的 JSON 数据到文件中
        files.write(filePath, jsonData);
        toast("文件已创建并初始化");
    } else {
        toast("文件已存在");
    }

    // 读取原始的 JSON 数据
    var jsonData = files.read(filePath);
    var originalData = jsonData ? JSON.parse(jsonData) : {};

    cz_json();
    
    // 从"id1"中获取"phone"字段的值
    var phoneValue = originalData["1"]["phone"];
    toast("id2的phone值为：" + phoneValue);

    // json操作
    function cz_json() {
        // 读取原始的 JSON 数据
        var jsonData = files.read(filePath);
        var originalData = jsonData ? JSON.parse(jsonData) : {};

        // 准备新的数据
        var newData = {
            phone: phone,
            name: name,
            nameb: nameb,
            namegs: namegs,
        };

        // 生成新的ID
        var id = Object.keys(originalData).length + 1;
        // 添加新数据并添加ID字段
        originalData[id] = newData;
        // 将更新后的数据转换为 JSON 字符串
        var updatedJsonData = JSON.stringify(originalData);
        // 写入更新后的数据到文件中
        files.write(filePath, updatedJsonData);
        toast("新的JSON数据已写入文件");

    }
});
