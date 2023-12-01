import { ResumePersonalizationProvider } from "@/context/ResumePersonalizationProvider";
import { UserDataSetContextProvider } from "@/context/ResumeDatasetProvider";
import { CurrentSectionContextProvider } from "@/context/CurrentSectionProvider";
import {
  PopupVisibilityContextProvider,
  usePopupVisibilityContext,
} from "@/context/PopupVisibilityProvider";

export default function Layout({ children }: any) {
  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-between pt-16">
      <ResumePersonalizationProvider>
        <UserDataSetContextProvider>
          <PopupVisibilityContextProvider>
            <CurrentSectionContextProvider>
              {children}
            </CurrentSectionContextProvider>
          </PopupVisibilityContextProvider>
        </UserDataSetContextProvider>
      </ResumePersonalizationProvider>
    </div>
  );
}
