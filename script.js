const display=document.querySelector("p"),
display1 = document.getElementById("text1"),
display2 = document.getElementById("text2"),
display3 = document.getElementById("text3"),
display4 = document.getElementById("text4"),
 button=document.querySelector("button"),
 copyBtn=document.querySelector("span.far"),
 copyActive=document.querySelector("span.fas");
//let chars ='あいうえお';
let chars = [
  
  {
    text1:`ဒီ`,
  },
  {
    text1:`အဲဒီ`,
  },
  {
    text1:`ဟို`,
  },
  {
    text1:`ဘယ်`,
  },
  {
    text1:`ဒီဘက် (ko ko ၏ယဉ်ကျေးသောအသုံး)`,
  },
  {
    text1:`အဲဒီဘက် (so ko ၏ယဉ်ကျေးသောအသုံး)`,
  },
  {
    text1:`ဟိုဘက် (a so ko ၏ယဉ်ကျေးသောအသုံး)`,
  },
  {
    text1:`ဘယ် (do ko ၏ယဉ်ကျေးသောအသုံး)`,
  },
  {
    text1:`စာသင်ခန်း`,
  },
  {
    text1:`ထမင်းစားဆောင်၊စားသောက်ဆိုင်၊ကန်တင်း`,
  },
  {
    text1:`ရုံးခန်း`,
  },
  {
    text1:`အစည်းအဝေးခန်း`,
  },
  {
    text1:`ဧည့်ကြိုကောင်တာ`,
  },
  {
    text1:`နားနေခန်း`,
  },
  {
    text1:`အခန်း`,
  },
  {
    text1:`အိမ်သာ (သန့်စင်ခန်း)`,
  },
  {
    text1:`လှေကား`,
  },
  {
    text1:`ဓာတ်လှေကား`,
  },
  {
    text1:`ရွေ့လျားစက်လှေကား`,
  },
  {
    text1:`အလိုအလျောက်ဈေးရောင်းစက်`,
  },
  {
    text1:`တယ်လီဖုန်း (ဖုန်း၊ဖုန်းလာ၍ပေါ် ပေးခြင်း)`,
  },
  {
    text1:`တိုင်းပြည်၊နိုင်ငံ`,
  },
  {
    text1:`ကုမ္ပဏီ`,
  },
  {
    text1:`အိမ်`,
  },
  {
    text1:`ဖိနပ်`,
  },
  {
    text1:`နက်ကတိုင်`,
  },
  {
    text1:`ဝိုင်အရက်`,
  },
  {
    text1:`အရောင်း (ပစ္စည်းထားသာ)နေရာ`,
  },
  {
    text1:`မြေအောက်`,
  },
  {
    text1:`-ထပ်`,
  },
  {
    text1:`ဘယ်နှထပ်၊ဘယ်အထပ်`,
  },
  {
    text1:`-ယန်း/ ယန်း-`,
  },
  {
    text1:`ဘယ်လောက် (ငွေကြေးတွင်သာသုံးသည်။)`,
  },
  {
    text1:`တစ်ရာ၊ရာ`,
  },
  {
    text1:`တစ်ထောင်၊ထောင်`,
  },
  {
    text1:`တစ်သောင်း/သောင်း`,
  },
  {
    text1:`တစ်ဆိတ်လောက် (တစ်စုံတစ်ဦးကိုခေါ်သော
      အခါတွင်သုံးသည်။)`,
  },
  {
    text1:`ကျေးဇူးပဲ။/ကျေးဇူးပါ။`,
  },
  {
    text1:`ကြိုဆိုပါတယ်။ ဆိုင်အတွင်းသို့ဝင်လာသော
    ဧည့်သည်အားနှုတ်ခွန်းဆက်ခြင်း)`,
  },
  {
    text1:`~ကို ပြပေးပါ။`,
  },
  {
    text1:`ကဲ၊ဒါဖြင့်`,
  },
  {
    text1:`~ကို ပေးပါ။`,
  },
  {
    text1:`အီတလီ`,
  },
  {
    text1:`ဆွစ်ဇလန်`,
  },
  {
    text1:`ပြင်သစ်`,
  },
  {
    text1:`ဂျာကာတာ`,
  },
  {
    text1:`ဘန်ကောက်`,
  },
  {
    text1:`ဘာလင်`,
  },
  {
    text1:`ရှင်းအိုဆာကာ (အိုဆာကာရှိဘူတာအမည်)`,
  },
  
];



















button.addEventListener('click', () => {
let randomPhrase=Math.floor(Math.random() * chars.length);
display.innerHTML = chars[randomPhrase].text1;
});

snowFall.snow(document.querySelector('.snow'), {
	minSize: 6,
	maxSize: 10,
	round: true,
	flakeCount: 30,
	flakeColor: 'white'
});





//  button.onclick=()=>{

// let randomPhrase=Math.floor(Math.random() * chars.length);
// display.value = chars[randomPhrase].text;
// display1.value = chars[randomPhrase].author;
// display2.value = chars[randomPhrase].text1;
// display3.value = chars[randomPhrase].text2;
// let randomPhrase1 =Math.floor(Math.random() * chars1.length);
// display1.value = chars1[randomPhrase].author;
   //
   // let i,
   // randomPassword="";
   // copyBtn.style.display = "block";
   // copyActive.style.display = "none";
   // for ( i = 0; i < 1; i++) {
   //   randomPassword = randomPassword + chars.charAt(
   //     Math.floor(Math.random() * chars.length)
   //   );
   // }

//  }
