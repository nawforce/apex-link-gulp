/*
 Copyright (c) 2022 Kevin Jones, All rights reserved.
 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
    derived from this software without specific prior written permission.
 */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function ctxError(err: any, context: string): Error {
  if (err instanceof Error) {
    err.message = `${context}: ${err.message}`;
    return err;
  } else {
    return Error(`${context}: ${JSON.stringify(err)}`);
  }
}
