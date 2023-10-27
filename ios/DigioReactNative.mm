#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(DigioReactNative, NSObject)

RCT_EXTERN_METHOD(
                  start:(NSString *)documentId
                  withIdentifier:(NSString *)identifier
                  withTokenId:(NSString *)tokenId
                  withAdditionalData:(NSDictionary * _Nullable)additionalData
                  withConfig:(NSDictionary * _Nullable)config
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withRejecter:(RCTPromiseRejectBlock)reject
                  )

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
