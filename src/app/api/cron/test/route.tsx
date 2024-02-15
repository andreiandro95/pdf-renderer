// api > hello > route.ts
import PendingHolidayRequestEmail from "@/emails/PendingHolidayRequestEmail";
import { resendSendMail } from "@/lib/resendSendMail";
import {NextRequest, NextResponse} from "next/server";

export async function GET (request: NextRequest){
    try{
        const array = [1,2,3]
        const arrayEmail= ['aa@armuro.com', 'andrei.andronachi95@gmail.com']
        const emailList = arrayEmail.toString()
        array.forEach(async (id) => {
            const isSent = await resendSendMail({
                to: emailList,
                subject: `Test`,
                component: `<p>${id}</p>`,
              });
              if (!isSent) throw new Error('Something went wrong');
              
        })
        return NextResponse.json({message: "OK"}, {status: 200})
    }catch (error) {
        return NextResponse.json({error: error}, {status: 500})
    }
}