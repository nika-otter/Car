"use client"
import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation" 
import { CustomButton } from "."

const ShowMore = ({pageNumber, isNext}:ShowMoreProps) => {
    const router = useRouter()
    const handleNavigation=()=>{}
  return (
    <div className="w-full flex-center gap-5 mt-10">
        ff
        {
            !isNext && (
                <CustomButton 
                title="Show More"
                btnType="button"
                containerStyles="bg-primery-blue rounded-full text-white"
                handleClick={handleNavigation}
                />
            )
        }

    </div>
  )
}

export default ShowMore