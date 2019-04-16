function Apple()
{
    this.weightApple = 10;
    this.getWeight = function ()
    {
        return this.weightApple;
    };
    this.decreaseWeight = function ()
    {
        if (this.weightApple > 0) this.weightApple--; else document.getElementById("demo").innerHTML = 'Qủa táo đã được ăn hết';
    }
}

function Human()
{
    this.setName = function (name)
    {
        this.name = name;
    };
    this.getName = function ()
    {
        return this.name;
    };
    this.setWeightHuman = function (weightHuman)
    {
        this.weightHuman = weightHuman;
    };
    this.getWeightHuman = function ()
    {
        return this.weightHuman;
    };
    this.setGender = function (gender)
    {
        this.gender = gender;
        switch (gender)
        {
            case 'man':
                alert("This is a man");
                break;
            case 'woman':
                alert("This is a woman");
                break;
            default:
                alert("This is a other gender");
        }
    };
    this.say = function ()
    {
        switch (this.gender)
        {
            case 'man':
                alert("“Anh có yêu em không?”\n" +
                    "\n" +
                    "“Không yêu… ”\n" +
                    "\n" +
                    "“Anh… Anh lừa em một c thì âuchết à?”\n" +
                    "\n" +
                    "“Lừa rồi, không chết mà…”");
                break;
            case 'woman':
                alert("“Đừng động đậy!”\n" +
                    "\n" +
                    "“Sao thế?”\n" +
                    "\n" +
                    "“Trong mắt cậu có người?”\n" +
                    "\n" +
                    "“Ai cơ?”\n" +
                    "\n" +
                    "“Một người thích cậu…");
                break;
            default:
                alert("Yêu một người chính là như vậy, tình cảm vĩnh viễn đều là đơn phương. " +
                    "Khi anh đối xử tốt với một người, si mê người đó, đối phương nếu đáp lại, đấy chính là tạo hóa an bài, " +
                    "nhưng nếu đối phương bất vi sở động, thậm chí căm ghét anh, cũng là quyền của họ, không có gì đáng trách. " +
                    "Thế giới này không có cái gọi là công bằng trong tình yêu, không có thứ tự đến trước đến sau, chỉ có… " +
                    "một người khắc cốt ghi tâm, một người dửng dưng như kẻ lạ.");
        }

    };
    this.setApple = function (apple)
    {
        this.apple = apple;
    };
    this.checkApple = function ()
    {
        return this.apple.getWeight;
    };
    this.eatApple = function ()
    {
        this.weightHuman++;
        this.apple.decreaseWeight();
    }
}

let apple = new Apple();
let adam = new Human();
adam.setApple(apple);
adam.setName('Adam');
adam.setGender('man');
adam.say();
adam.setWeightHuman(70);
adam.eatApple();
console.log(apple.weightApple);
console.log(adam.weightHuman);
let eva = new Human();
eva.setApple(apple);
eva.setName('Eva');
eva.setGender('woman');
eva.say();
eva.setWeightHuman(50);
eva.eatApple();
console.log(apple.weightApple);
console.log(eva.weightHuman);
let other = new Human();
other.setApple(apple);
other.setName('Other');
other.setGender('other');
other.say();
other.setWeightHuman(56);
other.eatApple();
console.log(apple.weightApple);
console.log(other.weightHuman);