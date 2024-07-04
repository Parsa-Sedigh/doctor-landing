export function calculateBMI(weight: number, heightInCm: number) {
    const heightInM = heightInCm / 100

    return weight / (heightInM * heightInM);
}

export function getBMICategory(bmi: number, age: number, sex: 'm' | 'f') {
    let category = "";
    if (sex === "m") {
        if (age >= 18) {
            if (bmi < 18.5) category = "Underweight";
            else if (bmi < 24.9) category = "Normal weight";
            else if (bmi < 29.9) category = "Overweight";
            else category = "Obesity";
        } else {
            // Categories for children and teenagers can vary
            // Add logic based on age-specific percentiles if necessary
        }
    } else if (sex === "f") {
        if (age >= 18) {
            if (bmi < 18.5) category = "Underweight";
            else if (bmi < 24.9) category = "Normal weight";
            else if (bmi < 29.9) category = "Overweight";
            else category = "Obesity";
        } else {
            // Categories for children and teenagers can vary
            // Add logic based on age-specific percentiles if necessary
        }
    }

    return category;
}

export function calculateHealthyWeightRange(heightInCm: number) {
    let heightInMeters = heightInCm / 100;
    let minWeight = 18.5 * heightInMeters * heightInMeters;
    let maxWeight = 24.9 * heightInMeters * heightInMeters;
    return [minWeight, maxWeight];
}
