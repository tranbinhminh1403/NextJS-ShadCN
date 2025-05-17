import {
  InputOTP as InputOTPComponent,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

export function InputOTP({ length = "3-3" }: { length?: string }) {
  const lengthArray = length.split("-").map((item) => Number(item));
  const totalLength = lengthArray.reduce((a, b) => a + b, 0);

  return (
    <InputOTPComponent maxLength={totalLength}>
      <div className="flex items-center gap-3">
        {lengthArray.map((groupLength, groupIndex) => (
          <div key={groupIndex} className="flex items-center gap-2">
            <InputOTPGroup className="flex items-center gap-2">
              {Array.from({ length: groupLength }, (_, slotIndex) => (
                <InputOTPSlot
                  key={`${groupIndex}-${slotIndex}`}
                  index={
                    lengthArray
                      .slice(0, groupIndex)
                      .reduce((acc, val) => acc + val, 0) + slotIndex
                  }
                  className="shadow-md rounded-md"
                />
              ))}
            </InputOTPGroup>

            {groupIndex < lengthArray.length - 1 && <InputOTPSeparator />}
          </div>
        ))}
      </div>
    </InputOTPComponent>
  );
}
