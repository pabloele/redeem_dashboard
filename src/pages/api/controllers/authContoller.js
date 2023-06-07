import conn from "../config/db";

export async function checkAuth(public_key)  {
    const winery = await conn.query(`SELECT * FROM wineries WHERE PUBLIC_KEY='${public_key}';`)
    if(winery.rows.length) {
        return true
    } else {
        return false
    }
}

export async function getProfile(public_key)  {
    const winery = await conn.query(`SELECT * FROM wineries WHERE PUBLIC_KEY='${public_key}';`)
    if(winery.rows.length) {
        return winery.rows[0]
    } else {
        throw new Error('Invalid credentials')
    }
}