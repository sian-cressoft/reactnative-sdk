//
//  DigioKycResponse.swift
//  digio-react-native
//
//  Created by Ramanand Sirvi on 26/10/23.
//

import Foundation

struct DigioKycResponse: Codable{
    let status: String?
    let message: String?
    let id: String?
    let code: Int?
    let errorCode: Int?
    let type: String?
    let screen: String?
}
