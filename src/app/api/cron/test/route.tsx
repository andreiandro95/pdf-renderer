// api > hello > route.ts
import PendingHolidayRequestEmail from "@/emails/PendingHolidayRequestEmail";
import { resendSendMail } from "@/lib/resendSendMail";
import {NextRequest, NextResponse} from "next/server";

export async function GET (request: NextRequest){
    try{
        const array = [1,2,3]
        const filterCompanyUserId = ['aa@armuro.com', 'andrei.andronachi95@gmail.com']
        array.forEach(async (id) => {
        
            await resendSendMail({
                to: filterCompanyUserId,
                subject: `Test`,
                component: `<p>tesst ${id}</p>`,
              });
        })
        return NextResponse.json({message: "OK"}, {status: 200})
    }catch (error) {
        return NextResponse.json({error: error}, {status: 500})
    }
}