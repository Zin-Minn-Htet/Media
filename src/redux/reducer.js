import { combineReducers } from 'redux';

const intData = {
    title1: "အနော်ရထာ",
    title2: "တိုင်းပြည်အတွက် ကြိုးပမ်းပုံ",
    para1: "အနော်ရထာမင်းကြီးသည် နန်းတက်သည်နှင့် တပြိုင်နက် နိုင်ငံစီးပွားရေးနှင့် စစ်အင်အားကို စည်းရုံးခဲ့သည်။ စီးပွားရေးအင်အား တောင့်တင်းရန်အတွက် ကျောက်ဆည်နယ်၌ တူးမြောင်းများကို စနစ်တကျ ဆည်ဖို့စေလျက် မြစ်ငယ်မြစ်၊ ပန်းလောင်မြစ်နှင့် စမုန်မြစ်တို့မှ စီးဆင်းလာသော ရေအားဖြင့် စပါးကောက်ပဲသီးနှံ အများအပြား ထွက်အောင် စီမံခန့်ခွဲခဲ့သည်။",
    descTitle: "နိုင်ငံတကာဆက်ဆံရေးနှင့် မြို့ ပေါင်း (၄၃) မြို့ကိုတည်ပုံ"

}

const sliteDataReducer = (state = intData, { type, payload }) => {
    switch (type) {
        case "add":
            return state = payload;
        case "remove":
            return state = {};
        default:
            return state
    }
}

const reducer = combineReducers({
    sliteData: sliteDataReducer
})

export default reducer;