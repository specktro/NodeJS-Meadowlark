const fortunesCookies = [
    'Conquer your fears or they will conquer you.',
    'Rivers need springs.',
    "Do not feat what yout don't know.",
    'You will have a pleasant surprise.',
    'Whenever possible, keep it simple.'
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortunesCookies.length)
    return fortunesCookies[idx]
}