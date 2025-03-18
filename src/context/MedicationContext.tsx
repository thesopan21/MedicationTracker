import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { medications } from "../data/sample_data.json";
// Define Medication type
interface Medication {
    id: string,
    name: string,
    dosage: string,
    quantity: string,
    time: string,
    instructions: string,
    specialNotes: string
    status: string
    takenAt: string | null
    inventory: number
    adherence: {
        weekly: number
    }
}

// Define State & Action Types
interface State {
    medications: Medication[];
}

type Action =
    | { type: 'MARK_AS_TAKEN'; id: string }
    | { type: 'SET_MEDICATIONS'; medications: Medication[] };

// Reducer function
const medicationReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'MARK_AS_TAKEN':
            return {
                ...state,
                medications: state.medications.map((med) =>
                    med.id === action.id ? { ...med, status: 'taken' } : med
                ),
            };
        case 'SET_MEDICATIONS':
            return { ...state, medications: action.medications };
        default:
            return state;
    }
};

// Create Context
const MedicationContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

// Provider Component
export const MedicationProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(medicationReducer, { medications });

    return (
        <MedicationContext.Provider value={{ state, dispatch }}>
            {children}
        </MedicationContext.Provider>
    );
};

// Custom Hook to use Medication Context
export const useMedications = () => {
    const context = useContext(MedicationContext);
    if (!context) {
        throw new Error('useMedications must be used within a MedicationProvider');
    }
    return context;
};
