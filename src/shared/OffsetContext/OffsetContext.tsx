import type { JSX } from "react";
import { Time } from "#shared/Time";
import { createContext, useContext, useMemo, useState } from "react";

interface ContextData {
  manualOffset: Time
  timezoneOffset: Time
}

interface ContextFull extends ContextData {
  setManualOffset?: ((arg0: Time) => void) | undefined;
  setTimezoneOffset?: ((arg0: Time) => void) | undefined;
}

const OffsetContext = createContext<ContextFull>({
  manualOffset: new Time(0, 0, 0),
  timezoneOffset: new Time(0, 0, 0),
});

export function OffsetContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  const [contextData, setContextData] = useState<ContextData>({
    manualOffset: new Time(0, 0, 0),
    timezoneOffset: new Time(0, 0, 0),
  });

  const setManualOffset = (newOffset: Time) => {
    setContextData((prev) => ({ ...prev, manualOffset: newOffset }));
  }

  const setTimezoneOffset = (newOffset: Time) => {
    setContextData((prev) => ({ ...prev, timezoneOffset: newOffset }));
  };

  const value: ContextFull = useMemo(
    () => ({
      manualOffset: contextData.manualOffset,
      timezoneOffset: contextData.timezoneOffset,
      setManualOffset,
      setTimezoneOffset,
    }),
    [contextData.manualOffset, contextData.timezoneOffset],
  );

  return (
    <OffsetContext.Provider value={value}>
      {children}
    </OffsetContext.Provider>
  );
}

export function useOffsetContext(): ContextFull {
  const context = useContext(OffsetContext);
  if (!context.setManualOffset || !context.setTimezoneOffset) {
    throw new Error(
      "useOffsetContext must be used within a ClickiesContextProvider",
    );
  }
  return context;
}
