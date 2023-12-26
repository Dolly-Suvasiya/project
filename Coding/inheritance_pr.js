class MobileBase{
    displayCount= 1;
    maxSimcardCount= 2;
    hasCharger= true;  

    constructor(props){
        console.log(' MobileBase props', props)
        
    }
}
new MobileBase(testObject=2);

class LowRange extends MobileBase{
    cameraCount =3;
     displayType ="LCD";
     constructor(props){
        super(props)
        console.log("Lowrange",this)
     }
}
new LowRange({});

class MidRange extends MobileBase
{;
    cameraCount =4
    displayType ="LED";
}
class HighRange  extends MobileBase{
     cameraCount= 5
    displayType ="OLED"
    constructor(props){
        super(props)
        console.log("HighRange",this)
}
}
new HighRange({});

//2nd level

class SamsungM31 extends MidRange{
     model =" Samsung M31"
company = "Samsung";
 price = 15000;
 constructor(props){
    super(props)
    console.log("SamsungM31",this)
 }
}
new SamsungM31();

class SamsungS23 extends HighRange
{
    model_Samsung ="S 23"
    company =" Samsung"
   price = 45000;
   constructor(props){
    super(props)
    console.log("Samsung S 23",this)
 }
}
new SamsungS23({})

class SamsungY extends LowRange
{
    model ="Samsung Young"
     company =" Samsung"
     price = 8000
     constructor(props){
        super(props)
        console.log("Samsung Young",this)

    }

}
new SamsungY({})